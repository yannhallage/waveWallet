import React from "react";

interface LoginProps {
  onCreateAccount: () => void;
}

const Login: React.FC<LoginProps> = ({ onCreateAccount }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/videos/vidbg.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Voile sombre pour améliorer la lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Formulaire */}
      <form className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-md w-full max-w-sm z-20 relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Se connecter
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Pas de compte ?{" "}
          <button
            type="button"
            onClick={onCreateAccount}
            className="text-blue-600 hover:underline"
          >
            Créer un compte
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
