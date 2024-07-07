const Step = (props) => {
    return (<div className="stepSelector">
        <label htmlFor="selectStep">Wybierz licznik zwiększenia </label>
        <input name="selectStep" id="selectStep" type="number" min="1" placeholder="1" onChange={props.updateStepValue} />

    </div>)
}

export default Step;