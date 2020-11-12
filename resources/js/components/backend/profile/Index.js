import React from "react";
class Index extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div
                    className="tab-pane fade show text-center"
                    id="store"
                    role="tabpanel"
                    aria-labelledby="store-tab"
                >
                    <div className="card bg-secondary border-0 mt-5 ml-auto mr-auto store-card">
                        <div className="card-header bg-transparent">
                            <div className="text-muted text-center mt-2 mb-3">
                                Update Profile
                            </div>
                        </div>
                        <div className="card-body px-lg-5 py-lg-5">
                            <form role="form">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Full Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: Roger Smith"
                                        id="store_name"
                                        name="store_name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Picture
                                    </label>
                                    <div className="custom-file w-100">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="customFileLang"
                                            lang="en"
                                        />
                                        <label
                                            className="custom-file-label"
                                            htmlFor="customFileLang"
                                        >
                                            Select Image
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        User Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: admin"
                                        id="username"
                                        name="username"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Ex: 123456"
                                        id="password"
                                        name="password"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary my-4"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
