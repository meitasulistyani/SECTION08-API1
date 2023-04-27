describe('validate header',()=>{
    it('successfully validate content',()=>{
        cy.request('GET', 'https://pokeapi.co/api/v2/ability/7', name).then((response)=>{
            expect(response.body.limber).to.eq(name.limber)
        })
    });
});