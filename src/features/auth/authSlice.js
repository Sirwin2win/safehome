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

      // localStorage.setItem('token', res.data.token)
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

      // Store token (and possibly user info) in localStorage
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("me", res.data.me);

      return res.data; // Should contain: { user, token }
    } catch (err) {
      // Better safe fallback error message
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: "Something went wrong. Please try again.",
        },
      );
    }
  },
);

// 🔓 Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  return null;
});

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
    error: null,
    initialized: false,
    updateStatus: "idle",
    msg: null,
    me: null,
  },
  reducers: {
    // setCredentials: (state, action) => {
    //   if (
    //     state.token === action.payload.token &&
    //     JSON.stringify(state.user) === JSON.stringify(action.payload.user)
    //   ) {
    //     return; // 🔒 Avoid unnecessary update
    //   }
    //   state.token = action.payload.token;
    //   state.user = action.payload.user;
    // }
    // setCredentials: (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.initialized = true;
    // },
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
        state.users = action.payload;
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
        state.status = "loading";
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.msg = action.payload.message;
        // state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Registration failed";
      })
      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.user = action.payload.user
        // state.token = action.payload.token
        const { token } = action.payload;
        try {
          const decoded = jwtDecode(token);
          state.user = {
            id: decoded.id,
            uuid: decoded.uuid,
            role: decoded.role,
            token,
          };
          localStorage.setItem("token", token);
          localStorage.setItem("me", action.payload.user);
        } catch (err) {
          console.error("Token decode failed:", err);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Login failed";
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
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
export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
