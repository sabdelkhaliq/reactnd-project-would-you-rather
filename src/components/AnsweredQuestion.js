export default AnsweredQuestion => {
    return (
        <div>
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header"><img alt="Example" style={{ marginRight: '5%', width: '10%' }} src={this.props.user.avatarURL} /><span>{`${this.props.user.name} asks...`}</span></div>
                <div class="card-body">
                    <h4 class="card-title">Would You Rather...</h4>
                    <p class="card-text">{this.props.question}</p>
                </div>
            </div>
        </div >
    )
}
