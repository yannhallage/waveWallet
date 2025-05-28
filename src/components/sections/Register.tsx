import React, { useState } from "react";
import { motion } from "framer-motion";

interface RegisterProps {
    onBackToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onBackToLogin }) => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [step, setStep] = useState(1);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            setSuccess(null);
            return;
        }
        setError(null);
        setSuccess("Inscription réussie !");
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Inscription
                </h2>

                {step >= 1 && (
                    <motion.div className="mb-4" {...fadeIn}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nom d'utilisateur :
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            onBlur={() => form.username && handleNext()}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>
                )}

                {step >= 2 && (
                    <motion.div className="mb-4" {...fadeIn}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={() => form.email && handleNext()}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>
                )}

                {step >= 3 && (
                    <motion.div className="mb-4" {...fadeIn}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe :
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            onBlur={() => form.password && handleNext()}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>
                )}

                {step >= 4 && (
                    <motion.div className="mb-4" {...fadeIn}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmer le mot de passe :
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>
                )}

                {error && (
                    <motion.div className="text-red-500 text-sm mb-4" {...fadeIn}>
                        {error}
                    </motion.div>
                )}

                {success && (
                    <motion.div className="text-green-600 text-sm mb-4" {...fadeIn}>
                        {success}
                    </motion.div>
                )}

                {step >= 4 && (
                    <motion.button
                        type="submit"
                        {...fadeIn}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
                    >
                        S'inscrire
                    </motion.button>
                )}

                <p className="mt-4 text-sm text-center text-gray-600">
                    Déjà un compte ?{" "}
                    <button
                        type="button"
                        onClick={onBackToLogin}
                        className="text-blue-600 hover:underline"
                    >
                        Se connecter
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Register;
