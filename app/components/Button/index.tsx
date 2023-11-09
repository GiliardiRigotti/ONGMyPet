import { ActivityIndicator } from "react-native"
import { Container, Title } from "./styles"
import { colors } from "../../constants/colors"

interface Props {
    title: string
    bgColor: string
    onPress: () => void
    loading?: boolean
}

export function Button({ title, bgColor, loading = false, onPress }: Props) {
    return (
        <Container style={{ backgroundColor: bgColor }} onPress={onPress} disabled={loading}>
            {
                loading ?
                    <ActivityIndicator animating color={colors.button.loadIndicator} />
                    :
                    <Title>{title}</Title>
            }
        </Container>
    )
}