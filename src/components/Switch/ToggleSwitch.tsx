import './Styles/base.scss'

interface SwitchProps {
    name: string
    small?: boolean
    checked: boolean
    onChange: (event: any) => void
    yesText?: string
    noText?: string
}

const ToggleSwitch = (props: SwitchProps) => {
    const containerClassName = props.small? "toggle-switch small" : "toggle-switch"

    return (
        <div className={containerClassName}>
            <input className="switch-input" id="switch" type="checkbox" checked={props.checked} onChange={props.onChange}></input>
            <label className="switch-label" htmlFor="switch">
                <span className="switch-circle"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch