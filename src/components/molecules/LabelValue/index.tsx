import * as s from './styles'

interface ILabelValue {
  label: string
  value: string
}

const LabelValue = ({ label, value, ...rest }: ILabelValue): JSX.Element => (
  <s.LabelValueWrapper {...rest}>
    <s.Label>{label}</s.Label>
    <s.Value>{value}</s.Value>
  </s.LabelValueWrapper>
)

export default LabelValue
