package br.com.webstore.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PaymentType {
    CREDIT,
    DEBIT,
    PIX
}
