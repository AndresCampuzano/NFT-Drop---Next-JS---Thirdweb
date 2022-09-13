export const useAllowList = () => {

    /**
     * Add user to the allowList
     * @param {string | undefined} address Current connected wallet address.
     * @returns {boolean} Return `true` if user is added to the allowList, else `false`.
     */
    const joinAllowList = async (address: string | undefined): Promise<boolean> => {
        const response = await fetch('/api/add-allowlist', {
            method: 'POST',
            body: JSON.stringify({ address }),
        })

        const { success } = await response.json()

        return !!success;
    }

    return {
        join: joinAllowList
    }
}