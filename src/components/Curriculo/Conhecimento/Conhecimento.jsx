
function Conhecimento(props){
    return(
                <div class="boxConhecimento"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                    <div class="containerTitleConhecimento">
                        <span>- {props.TitleConhecimento} -</span>
                    </div>
                    <div class="containerDescConhecimento">
                        <ul>
                            <li>{props.conhecimento1}</li>
                            <li>{props.conhecimento2}</li>
                            <li>{props.conhecimento3}</li>
                        </ul>
                    </div>
                    <div class="iconDesc">
                        <i className={props.iconConhecimento1}></i>
                        <i className={props.iconConhecimento2}></i>
                        <i className={props.iconConhecimento3}></i>
                    </div>
                </div>
    )
}


export default Conhecimento