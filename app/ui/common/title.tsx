import { tenor_sans } from "../fonts";

interface TitleProps {
  title: string;
  subtitle?: string | boolean;
  className?: string;
  level?: 1 | 2; // только h1 или h2
}

export default function Title({title, subtitle, className, level = 1}: TitleProps) {
  
  // Одинаковые стили для обоих уровней
  const styles = `${tenor_sans.className} uppercase text-lg sm:text-3xl`;
  
  return(
    <div className={`mb-5 sm:mb-6 ${className}`}>
      {level === 1 ? (
        <h1 className={styles}>{title}</h1>
      ) : (
        <h2 className={styles}>{title}</h2>
      )}
      {subtitle && typeof subtitle === 'string' && (
        <p className="text-xs sm:text-base text-gray max-w-2xl mt-3">{subtitle}</p>
      )}
    </div>
  );
}