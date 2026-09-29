function SectionHeading({ className, ...props }) {
  return (
    <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl mb-8 {className}">
      {props.children}
    </h2>
  )
}

export default SectionHeading