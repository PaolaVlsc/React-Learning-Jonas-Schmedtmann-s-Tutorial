import {useState} from "react";


// Accordion as in the whole component
const Accordion = ({data}) => {
    return (
        <div className={"accordion"}>

            {data.map((item, index) =>
                (<AccordionItem title={item.title} text={item.text} num={index}/>))
            }
        </div>
    );
}

// Accordion's items
function AccordionItem({num, title, text}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>

            {/*this line ensures that the item number is displayed with a leading zero
            if it's a single-digit number (less than 9) to maintain a consistent two-digit format in the UI.*/}
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>

            {/*expand */}

            {isOpen && <div className={"content-box"}>{text}</div>}
        </div>
    );
}


export default Accordion;
