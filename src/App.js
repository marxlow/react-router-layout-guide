import React from "react";

// Layouts
import PublicLayout from "./shared/layout/PublicLayout";
// import AuthLayout from './shared/layout/AuthLayout';

// Public pages
import LoginPage from "./pages/LoginPage";

// Authenticated pages

const App = () => {
  return (
    <PublicLayout>
      <LoginPage />
    </PublicLayout>
  );
};

export default App;
