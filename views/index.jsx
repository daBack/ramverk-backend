var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

class Index extends React.Component {
    render() {
        return (<Layout title={this.props.title}>
            <div class='outerWrapper'>
                <div class='innerWrapper'>
                    <div class='split2'>
                        <div class='leftDiv'>
                            <p>supertest</p>
                            <div class='rightDiv'>
                                <img src='/img/me.png' alt='jag'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>);
    }
}

Index.propTypes = {
    title: PropTypes.string
};

module.exports = Index;
