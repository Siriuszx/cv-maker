export { ControlsSection };

import '../../../style/controls.css';

function ControlsSection({
    resetStates,
    setDummyState,
}) {
    return (
        <section className="controls-section">
            <div className="controls-section__container">
                <div className="controls-section__controls">
                    <div className='controls-section__controls-item'>
                        <img id='clear-button' onClick={resetStates} className="controls-section__icon control-icon" src="../../public/text-box-remove.svg" alt="Clear Form Icon" />
                        <label className='controls-section__label' htmlFor="clear-button">Clear</label>
                    </div>
                    <div className='controls-section__controls-item'>
                        <img id='autofill-button' onClick={setDummyState} className="controls-section__icon control-icon" src="../../public/text-box-plus.svg" alt="Clear Form Icon" />
                        <label className='controls-section__label' htmlFor="autofill-button">Autofill</label>
                    </div>
                </div>
            </div>
        </section>
    );
}