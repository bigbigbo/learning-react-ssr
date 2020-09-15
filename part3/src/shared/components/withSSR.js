/* eslint-disable no-invalid-this */
import React from 'react';

const withSSR = (WrappedComponent) => {
  return class extends React.Component {
    static async getInitialProps({ req, res }) {
      return WrappedComponent.getInitialProps ? WrappedComponent.getInitialProps({ req, res }) : {};
    }

    state = {
      initialData: {},
      needGetInitialPropsInClient: false,
    };

    async componentDidMount() {
      const needGetInitialPropsInClient = this.props.history && this.props.history.action === 'PUSH';
      if (__CLIENT__ && needGetInitialPropsInClient) {
        this._getInitialProps();
      }
    }

    _getInitialProps = async () => {
      const { match, location } = this.props;
      const initialData = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps({ match, location })
        : {};

      this.setState({ initialData, needGetInitialPropsInClient: true });
    };

    get _props() {
      const props = { ...this.props };

      if (__SERVER__) {
        // 如果是服务端渲染，则直接从 staticContext 获取
        console.log('1');
        Object.assign(props, this.props.staticContext ? this.props.staticContext.initialData : {});
      } else {
        if (this.state.needGetInitialPropsInClient) {
          console.log('2');
          Object.assign(props, this.state.initialData);
        } else {
          console.log('3');
          Object.assign(props, window.__INITIAL_DATA__);
          window.__INITIAL_DATA__ = undefined; // 使用过后清除数据,否则其他页面会使用
        }
      }

      return props;
    }

    render() {
      return <WrappedComponent {...this._props} />;
    }
  };
};

export default withSSR;
