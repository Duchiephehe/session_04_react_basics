function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" />
            <table>
                <tbody>
                    <tr>
                        <td>Bui Duc</td>
                        <td>Hiep</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>hieptop12@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
