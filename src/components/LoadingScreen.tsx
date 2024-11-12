import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded && (
        <div className="h-screen">
          <motion.div className="absolute flex h-full w-full justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 0.2, duration: 1.1, ease: "easeInOut" }}
            >
        <div className="flex space-x-21 relative bottom-10">
        <motion.h1
            className="text-3xl font-semibold -tracking-wider text-blue-500"
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, -20, 0], rotate: [0, 10,0, 0] }}
            transition={{
              opacity: { delay: 0.1, duration: 2.5, times: [0, 0.1, 0.9, 1], ease: "easeInOut" },
              y: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
              rotate: { delay: 0, duration: 0.6, ease: "easeInOut" }
            }}
          >
            VITOR
          </motion.h1>
          <motion.h1
            className="text-3xl font-semibold -tracking-wider text-blue-500"
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, -20, 0], rotate: [0,10, 0, 0] }}
            transition={{
              opacity: { delay: 0.2, duration: 2.5, times: [0, 0.1, 0.9, 1], ease: "easeInOut" },
              y: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
              rotate: { delay: 0.2, duration: 0.6, ease: "easeInOut" }
            }}
          >
            KUBICA
          </motion.h1>
        </div>
      </motion.div>

      
      {/* Barra de Carregamento */}
      <motion.div className="absolute flex h-full w-full justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: 0.2, duration: 1.1, ease: "easeInOut" }}
      >
        <motion.div
          className="h-[2px] bg-blue-500 overflow-hidden relative"
          initial={{ width: "22%", opacity: 1 }}
          animate={{ width: "100%", opacity: 0 }}
          transition={{
            width: { delay: 3.4, duration: 0.4, ease: "easeIn" },
            opacity: { delay: 3.8, duration: 0.3, ease: "easeOut" }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Animação de Tela de Fundo */}
      <div className="flex min-h-screen flex-col items-center justify-between">
        <motion.div
          initial={{ height: "50vh" }}
          animate={{ height: 0 }}
          transition={{ delay: 4, duration: 2, ease: "easeInOut" }}
          className="bg-white w-full"
        />
        <motion.div
          initial={{ height: "50vh" }}
          animate={{ height: 0 }}
          transition={{ delay: 4, duration: 2, ease: "easeInOut" }}
          className="bg-white w-full"
        />
      </div>
        </div>
      )}
    </div>
  );
}
