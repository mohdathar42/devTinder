export const adminAuth= (req, res, next) => {
    console.log("Admin getting checked");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
      res.status(403).send("Unauthorized access!");
    } else {
      next();
    }
  }
  export const userAuth= (req, res, next) => {
    console.log("User getting checked");
    const token = "xyzw";
    const isAdminAuthorized = token === "xyzw";
    if (!isAdminAuthorized) {
      res.status(403).send("Unauthorized access!");
    } else {
      next();
    }
  }