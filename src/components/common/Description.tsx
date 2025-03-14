

const Description = ({ myText="", myClass="" }) => {
    return (
        <p className={`font-normal text-xl leading-7 sm:text-[22px] sm:leading-9 xl:leading-[43.2px] xl:text-2xl ff-schoolbell text-[#0E0E0E] ${myClass}`}>{myText}</p>
    )
}
export default Description