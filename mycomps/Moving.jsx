
import { motion } from 'framer-motion';

export default function Moving({direction = 'top', children, className = '', index = 0}) {

    let animation = {init_X: 0 , init_Y: 0, x: 0, y: 0};
    switch (direction) {
        case 'top':
            animation.init_Y = 20;
            break;
        case 'bottom':
            animation.init_Y = -20;
            break;
        case 'left':
            animation.init_X = 20;
            break;
        case 'right':
            animation.init_X = -20;
            break;
    }
    return(

        <motion.div
            initial={{ opacity: 0, y: animation.init_Y, x: animation.init_X }}
            animate={{ opacity: 1, y: animation.y, x: animation.x }}
            transition={{ delay: index * 0.1 }}
            className= {`${ className }`}
        >
            {children}
        </motion.div>
    )
        }