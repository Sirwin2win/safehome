import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "https://api.safehomeproperties.com/api/auth";

// Get user from localStorage     http://api.safehomeproperties.com/
const token = localStorage.getItem("token");
let user = null;

if (token) {
  try {
    const decoded = jwtDecode(token);
    user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      token,
    };
  } catch (err) {
    console.error("Invalid token", err);
  }
}

// 🔐 Get Users
export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data; // { user, token }
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: "Something went wrong" },
      );
    }
  },
);

export const updateRole = createAsyncThunk(
  "auth/update",
  async ({ id, role }, thunkAPI) => {
    try {
      const res = await axios.put(`${API_URL}/update-role`, {
        role,
        id,
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// Update user details using patch method
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ id, forms }, thunkAPI) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, forms);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// 🔐 Register
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, phone, email, role, password }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/register`, {
        name,
        phone,
        email,
        role,
        password,
      });

      // localStorage.setItem("token", res.data.token);
      // console.log(res.data)

      return res.data; // { user, token }
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: "Something went wrong" },
      );
    }
  },
);

// 🔐 Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: "Something went wrong. Please try again.",
        },
      );
    }
  },
);

// 🔓 Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      await api.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("me");
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  },
);

// Get Single User
export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (id, thunkAPI) => {
    try {
      // const token = localStorage.getItem('token');

      const { data } = await axios.get(`${API_URL}/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch user",
      );
    }
  },
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user,
    users: [],
    status: "idle",
    loginStatus: "idle",
    registerStatus: "idle",
    error: null,
    initialized: false,
    updateStatus: "idle",
    msg: null,
    me: null,
  },
  reducers: {
    clearAuthAfterPasswordReset: (state) => {
      state.user = null;
      state.me = null;
      state.error = null;
      state.loginStatus = "idle";

      localStorage.removeItem("token");
      localStorage.removeItem("me");
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Users
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.users;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // update user
      .addCase(updateRole.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        state.currentProduct = action.payload;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.registerStatus = "loading";
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        state.msg = action.payload.message;
        // state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.payload?.message || "Registration failed";
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loginStatus = "loading";
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";

        const { user, token } = action.payload;

        state.user = user;

        localStorage.setItem("token", token);
        localStorage.setItem("me", JSON.stringify(user));
      })

      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.payload?.message || "Login failed";
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.me = null;
        state.loginStatus = "idle";
        state.status = "idle";
        state.error = null;
      })
      .addCase(logout.rejected, (state) => {
        // Still log the user out locally
        state.user = null;
        state.me = null;
        state.loginStatus = "idle";
        state.status = "idle";
        state.error = null;
      })

      // Get User By Id
      // Pending
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      // Success
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })

      // Error
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update User By Id
      // Pending
      .addCase(updateUser.pending, (state) => {
        state.updateStatus = "loading";
        state.error = null;
      })

      // Success
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        state.user = action.payload;
      })

      // Error
      .addCase(updateUser.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.payload;
      });
  },
});
// export const { setCredentials } = authSlice.actions;
export const { clearAuthAfterPasswordReset } = authSlice.actions;
export default authSlice.reducer;
