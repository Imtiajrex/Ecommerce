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
                                Update Store Details
                            </div>
                        </div>
                        <div className="card-body px-lg-5 py-lg-5">
                            <form role="form">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: Priyo Shop"
                                        id="store_name"
                                        name="store_name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Logo
                                    </label>
                                    <br />
                                    <img
                                        src={`${assetPath}storage/images/logo.png`}
                                        width="80"
                                        heigh="80"
                                    />
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
                                            Select Logo
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Website Address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: priyoshop.com"
                                        id="store_web_address"
                                        name="store_web_address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Address
                                    </label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: Saraipara, Pahartali"
                                        id="store_address"
                                        name="store_address"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Facebook Link
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: facebook.com/priyoshop"
                                        id="facebook_link"
                                        name="facebook_link"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Instagram Link
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: facebook.com/priyoshop"
                                        id="instagram_link"
                                        name="instagram_link"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Youtube Link
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ex: facebook.com/priyoshop"
                                        id="youtube_link"
                                        name="youtube_link"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Title
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Welcome To Priyoshop!"
                                        id="store_title"
                                        name="store_title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Store Tags For SEO
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Shop, Store, Online Store"
                                        id="tags"
                                        name="tags"
                                    />
                                    <small style={{ fontSize: "10px" }}>
                                        Separate by Comma
                                    </small>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary my-4"
                                    >
                                        Submit
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
