export const IconText = ({ icon: Icon, children, color = '' }) => {
  return (
    <div className="text-base font-normal flex">
      <Icon className={`${color} h-6 mr-4`} />
      {children}
    </div>
  )
}
