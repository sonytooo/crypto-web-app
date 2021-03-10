import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import './modal-styles.css';
import {ModalCloseIcon, ColLabelsContainer, Label, TradesList, CenteringWrapper, Heading} from './styles';
import CloseIcon from '../../assets/svg/close-icon.svg';
import TradeCard from '../TradeCard';
import LoadingIndicator from '../Loading';

Modal.setAppElement('#root');

const TradesModal = ({openTrades, onAfterOpen, onRequestClose}) => {
    const trades = useSelector((state) => state.trades);

    const renderColLabels = () => {
        return (
            <ColLabelsContainer>
                <Label>Time</Label>
                <Label position="center">Trade Size</Label>
                <Label position="flex-end">Price</Label>
            </ColLabelsContainer>
        )
    }

    const render = () => {
        if (trades[openTrades.toLowerCase()].loading) {
            return (
                <CenteringWrapper>
                    <LoadingIndicator />
                </CenteringWrapper>
            )
        } 

        if (trades[openTrades.toLowerCase()].error) {
            return (
                <CenteringWrapper>
                    <Label>{trades[openTrades.toLowerCase()].error}</Label>
                </CenteringWrapper>
            )
        }
        return (
            <>
                {renderColLabels()}
                <TradesList>
                {trades[openTrades.toLowerCase()].trades.map((trade, index) => (
                    <TradeCard 
                        key={`${index}-${trade.time}`}
                        time={trade.time} 
                        size={trade.size} 
                        price={trade.price} 
                        type={trade.type} 
                    />
                ))}
                </TradesList>
            </>
        )
    }

    return (
        <Modal
        isOpen={!!openTrades}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        className="modal"
        overlayClassName="modal-overlay"
    >
        <ModalCloseIcon src={CloseIcon} width="20px" onClick={onRequestClose} />
        <Heading>{`${openTrades} Trades History`}</Heading>
        {!!openTrades && render()}
    </Modal>
    )
}

export default TradesModal;