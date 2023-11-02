import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - PillBill`}</title>
        </Helmet>
    )
}

export default MetaData