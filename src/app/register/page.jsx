import RegisterForm from "../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-sky-50 px-4 py-12">
      <div className="w-full max-w-lg">
        <RegisterForm />
      </div>
    </main>
  );
}