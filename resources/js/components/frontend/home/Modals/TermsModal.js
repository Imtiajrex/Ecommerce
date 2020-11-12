import React from "react";
function Index() {
    return (
        <>
            <div
                className="modal fade"
                id="termsModal"
                role="dialog"
                aria-labelledby="termsModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Terms & Conditions
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero tempore nulla dolores doloribus,
                            repellendus expedita! Laudantium perspiciatis culpa
                            ratione quis tempora unde adipisci nesciunt dolorum
                            officiis, nisi ut, ex voluptatem.
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
