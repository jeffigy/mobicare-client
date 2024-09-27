import Link from "next/link";
const CheckEmail = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
      <div className="max-w-xl space-y-3 text-center">
        <h2 className="text-[42px] font-bold text-base-content">
          Check your inbox
        </h2>
        <p className="text-lg text-base-content">
          {" "}
          A verification email has been sent to your email address. Please check
          your inbox and follow the instructions to verify your account.
        </p>

        <p className="text-lg text-base-content">
          If you don&apos;t see the email, please check your spam or junk
          folder.
        </p>

        <Link href="/" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default CheckEmail;
