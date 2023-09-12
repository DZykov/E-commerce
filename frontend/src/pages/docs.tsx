function Docs() {

    return (
        <>
            <iframe src="http://localhost:3000/swagger-ui/index.html"
                style={{
                    overflow: "hidden",
                    overflowY: "hidden",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px"
                }}></iframe>
        </>
    )
}

export default Docs;