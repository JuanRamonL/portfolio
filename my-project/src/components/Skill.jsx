function Skill (props) {
  return (
    <>
    <div className="mt-2 w-4/12 text-center mx-4">
        <div className="text-center">
            <i className={`${props.icon} text-4xl pt-2`} ></i>
        </div>
        <div>
            <p>{props.skill}</p>
            <i>{props.description}</i>
        </div>
    </div>
    </>
  )
}
export default Skill;