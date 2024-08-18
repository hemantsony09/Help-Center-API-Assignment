
function Footer() {
    return (
        <footer className="footer">
            <div>
                <h3>Abstract</h3>
                <p>Branches</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Help Center</p>
                <p>Status</p>
            </div>
            <div>
                <h3>community</h3>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Facebook</p>
                <p>dribble</p>
                <p>podcast</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Legal</p>

                <div className="contect">
                    <h4>Contact Us</h4>
                    <p><a href="mailto:info@abstract.com">info@abstract.com</a></p>
                </div>
            </div>

            <div className="copyright">
                <div><img src="../../public/image/abstract-logo.png" alt="" /></div>
                <p>@copyright 2022</p>
                <p>Abstract Studio Design, inc.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
