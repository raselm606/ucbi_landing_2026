import Link from "next/link";

const Button = ({ href, children, variant = "", className = "", ...props }) => {
  const variants = {
    primary: "btn-primary",
    top_nav_button: "top_nav_button",
    primary_sm: "btn_primary_sm",
    no_outline: "cta_artist",
  };

  const variantClass = variants[variant] || variants.primary;
  const combined = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combined} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};

export default Button;
