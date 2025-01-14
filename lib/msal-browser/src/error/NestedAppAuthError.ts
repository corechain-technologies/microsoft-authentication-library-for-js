/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { AuthError } from "@azure/msal-common";

/**
 * NestedAppAuthErrorMessage class containing string constants used by error codes and messages.
 */
export const NestedAppAuthErrorMessage = {
    unsupportedMethod: {
        code: "unsupported_method",
        desc: "The PKCE code challenge and verifier could not be generated.",
    },
};

export class NestedAppAuthError extends AuthError {
    constructor(errorCode: string, errorMessage?: string) {
        super(errorCode, errorMessage);

        Object.setPrototypeOf(this, NestedAppAuthError.prototype);
        this.name = "NestedAppAuthError";
    }

    public static createUnsupportedError(): NestedAppAuthError {
        return new NestedAppAuthError(
            NestedAppAuthErrorMessage.unsupportedMethod.code,
            NestedAppAuthErrorMessage.unsupportedMethod.desc
        );
    }
}
