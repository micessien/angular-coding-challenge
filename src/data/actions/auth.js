/**
 * Save user login data
 *
 * @param  object  user
 * @return  func
 */
const saveUserData = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

/**
 * Get user login data
 *
 * @param  object  user
 * @return  func
 */
const getUserData = () => {
  const userData = localStorage.getItem("currentUser");
  if (!userData) {
    return null;
  } else {
    return JSON.parse(userData);
  }
};

// Login Method
/**
 * Save user login data
 *
 * @param  object  user
 * @return  func
 */
const login = async (email, password) => {
  try {
  } catch (error) {
    alert(error.message);
  }
};

/**
 * Register Method
 *
 * @param  object  user
 * @return  func
 */
const register = async ({ name, email, password }) => {
  console.log("registering");
};

/**
 * Logout Method
 *
 * @return  func
 */
const logout = async () => {
  // Clear local storage and redirect to home page or dashboard of current logged in
  localStorage.removeItem("currentUser");
};

/**
 * Forgot password Method
 *
 * @param  object  user
 * @return  func
 */
const forgotPassword = (email) => {
  console.log(`forgotting ${email}`);
};

/**
 * Send Email Verification Method
 *
 * @param  object  user
 * @return  func
 */
const sendEmailForVerification = () => {
  console.log("Sending verification mail");
};

export {
  saveUserData,
  getUserData,
  login,
  register,
  logout,
  forgotPassword,
  sendEmailForVerification,
};
