describe('Checking selectProperty method', function () {
    before(function () {
        this.stream = new Rx.Subject()
        this.result = []
    })

    it('selects value of object in stream message by key', function () {
        this.stream
          .selectProperty('levelOne')
          .subscribe(function(msg) { this.result.push(msg) })
          
        this.stream.onNext({levelOne: 'message', otherValue: 'whocares'})
        this.stream.onNext({levelOne: { nested: 'value' } }})
        
        this.result[0].should.equal('message')
        this.result[1].should.equal({ nested: 'value' })
    })
})
