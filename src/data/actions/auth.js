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
 * Get User login data
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

/**
 * Remove User login data
 *
 */
const removeUserData = async () => {
  // Clear local storage and redirect to home page or dashboard of current logged in
  localStorage.removeItem("currentUser");
};

export { saveUserData, getUserData, removeUserData };
