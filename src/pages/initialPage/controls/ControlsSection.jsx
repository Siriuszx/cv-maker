export { ControlsSection };

import { ControlsButton } from './ControlsButton';
import '../../../style/sections/controls.css';

function ControlsSection({
    resetStates,
    setDummyState,
    printDocument
}) {
    return (
        <section className="controls-section">
            <div className="controls-section__container">
                <div className="controls-section__controls">
                    <ControlsButton
                        imgSrc="/text-box-remove.svg"
                        altText="Clear Form Icon"
                        actionHandler={resetStates}
                        additionalClassName="clear-button-label"
                    >
                        <span>Clear</span>
                    </ControlsButton>
                    <ControlsButton
                        imgSrc="/text-box-plus.svg"
                        altText='Autofill Form Icon'
                        actionHandler={setDummyState}
                    >
                        <span>Autofill</span>
                    </ControlsButton>
                    <ControlsButton
                        imgSrc="/printer.svg"
                        altText='Print CV Icon'
                        actionHandler={printDocument}
                    >
                        <span>Print</span>
                    </ControlsButton>
                </div>
            </div>
        </section>
    );
}