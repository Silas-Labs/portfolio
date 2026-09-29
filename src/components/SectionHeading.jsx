function SectionHeading({ className = "", children }) {
  return (
    <h2
      className={`font-display font-medium text-2xl sm:text-3xl lg:text-4xl mb-8 ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionHeading
