import React from "react";

const Terms = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="p-10 w-full">
          <div>
            <h1 className="text-5xl font-bold">Terms and Conditions</h1>
            <p className="py-6">
              Welcome to our website! By accessing or using our services, you
              agree to comply with the following terms and conditions. If you do
              not agree with any part of these terms, please refrain from using
              our services.
            </p>
            <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
            <p className="py-2">
              By using our website, you acknowledge that you have read,
              understood, and agree to be bound by these terms and conditions.
            </p>
            <h2 className="text-3xl font-bold">2. User Responsibilities</h2>
            <p className="py-2">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account.
            </p>
            <h2 className="text-3xl font-bold">3. Intellectual Property</h2>
            <p className="py-2">
              All content on our website, including text, graphics, logos, and
              images, is the property of our company or our licensors. You may
              not reproduce, distribute, or create derivative works from any
              content without our express written permission.
            </p>
            <h2 className="text-3xl font-bold">4. Limitation of Liability</h2>
            <p className="py-2">
              To the fullest extent permitted by law, we shall not be liable for
              any direct, indirect, incidental, special, or consequential
              damages arising from your use of our website or services.
            </p>
            <h2 className="text-3xl font-bold">5. Changes to Terms</h2>
            <p className="py-2">
              We reserve the right to modify these terms and conditions at any
              time. Any changes will be effective immediately upon posting on
              our website. Your continued use of our services after any changes
              constitutes your acceptance of the new terms.
            </p>
            <div className="text-center">
              <a href="/" className="btn btn-primary mt-5">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
