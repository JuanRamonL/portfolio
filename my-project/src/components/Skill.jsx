function Skill (props) {
  return (
    <>
    <div className="mt-2 text-center mx-4">
        <a href={`${props.link}`} rel={`./img/icon/${props.img}.png`} className="flex justify-center" target="_blank">
            <img src={`./img/icon/${props.img}.png`} alt={`./img/icon/${props.img}.png`} className="py-2 w-[20%]  grayscale transition duration-500 hover:grayscale-0 hover:scale-125" ></img>
        </a>
        <div>
            <p className="text-lg ">{props.skill}</p>
            <i className="text-sm mt-0">{props.description}</i>
        </div>
    </div>
    </>
  )
}
export default Skill;