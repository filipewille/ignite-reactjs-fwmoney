import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProrps {
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal}: HeaderProrps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="fw money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button> 
            </Content>
        </Container>
    )
}