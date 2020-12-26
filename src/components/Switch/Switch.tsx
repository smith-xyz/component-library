import './Styles/base.scss'

interface SwitchProps {
    name: string
    small?: boolean
    checked: boolean
    onChange: (event: any) => void
    yesText?: string
    noText?: string
}

const Switch = (props: SwitchProps) => {
    const containerClassName = props.small? "toggle-switch small-switch" : "toggle-switch"

    return (
        <div className={containerClassName}>
            <input type="checkbox" 
                    checked={props.checked} 
                    onChange={props.onChange}
                    className="toggle-switch-checkbox" 
                    name={props.name} 
                    id={props.name} />
            <label className="toggle-switch-label" htmlFor={props.name}>
            <span className="toggle-switch-inner" 
                data-yes={props.yesText ? props.yesText : "Yes"} 
                data-no={props.noText ? props.noText : "No"}
            />
            <span className="toggle-switch-switch" />
            </label>
      </div>
    )
}

export default Switch