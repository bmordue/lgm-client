App.Game = DS.Model.extend({
  turn: DS.attr('integer'),
  terrain: DS.attr('string')
});

App.Game.FIXTURES = [
  {
    turn: 1,
    terrain: '.....\r\n.....\r\n.....\r\n.....\r\n.....'
  }
];
