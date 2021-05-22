import './rightbar.css'

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarContent">
                <div className="rightbarTile">
                    <a href="https://docs.google.com/document"><img src="assets/docs.png" alt="" className="rightbarImg" /></a>
                </div>
                <div className="rightbarTile">
                    <a href="https://docs.google.com/presentation"><img src="assets/slides.png" alt="" className="rightbarImg" /></a>
                </div>
                <div className="rightbarTile">
                    <a href="https://docs.google.com/spreadsheets"><img src="assets/sheets.png" alt="" className="rightbarImg" /></a>
                </div>
                <div className="rightbarTile">
                    <a href="https://www.microsoft.com/en-in/microsoft-teams/log-in"><img src="assets/msteams.png" alt="" className="rightbarImg" /></a>
                </div>
            </div>
        </div>
    )
}
