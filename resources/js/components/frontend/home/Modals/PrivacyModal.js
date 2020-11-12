import React from "react";
function Index() {
    return (
        <>
            <div
                className="modal fade"
                id="privacyModal"
                role="dialog"
                aria-labelledby="privacyModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Privacy Policy
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Deleniti iste, quidem saepe fugit deserunt
                            laboriosam a eum aliquid provident sed quod suscipit
                            laborum quam ea rem harum iusto cum reprehenderit.
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
