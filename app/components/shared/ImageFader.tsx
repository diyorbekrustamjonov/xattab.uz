import { motion, AnimatePresence } from 'framer-motion';

type ImageFaderProps = {
    src: string;
};

const ImageFader: React.FC<ImageFaderProps> = ({ src }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.img
                key={src}
                src={src}
                alt="Digital Art"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '20px' }}
            />
        </AnimatePresence>
    );
};

export default ImageFader;
