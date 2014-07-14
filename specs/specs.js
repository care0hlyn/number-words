describe("numberWords", function(){
  it("1 returns one", function() {
    numberWords(1).should.equal("one");
  });
  it("returns the written form of a two-digit number", function(){
    numberWords(21).should.equal("twenty one");
  });
});

