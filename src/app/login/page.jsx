/*import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-sky-50 px-4 py-12">
     <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
}
*/
import LoginForm from "../../components/LoginForm";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-sky-50 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
}
